import React, { useEffect, useState } from "react"
import { useParams } from "react-router"
import axios from "axios"
import styled from "styled-components"

const Wrapper = styled.div`
	color: white;
	display: flex;
	item-aligns: center;
	justify-content: center;
	flex-direction: column;
	padding-left: 15px;
`

const Title = styled.div`
	font-size: 28px;
	font-weight: 500;
	letter-spacing: 2.8px;
	padding: 20px 0 10px 0;
	width: 90%;
`
const Tagline = styled.div`
	font-size: 20px;
	font-weight: 500;
	letter-spacing: 1.6px;
`

const Numbers = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	width: 90%;
`

const Food = styled.div`
	display: flex;
	flex-direction: row;
`

const BeerPhoto = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	img {
		width: 90%;
	}
`

interface ParamProps {
	id?: string
}

interface DataProps {
	id: number
	name: string
	tagline: string
	first_brewed: string
	description: string
	image_url: string
	abv: number
	ibu: number
	ph: number
	volume: {
		value: number
		unit: string
	}
	food_pairing: [string]
	brewers_tips: string
	contributed_by: string
}

const Detail = () => {
	const { id } = useParams<ParamProps>()
	const [loading, setLoading] = useState(true)
	const [data, setData] = useState<Partial<DataProps[]>>([])

	useEffect(() => {
		const fetchData = async () => {
			setLoading(true)
			try {
				const { data: response } = await axios.get(`https://api.punkapi.com/v2/beers/${id}`)
				setData(response)
			} catch (error) {
				console.log(error)
			}
			setLoading(false)
		}
		fetchData()
	}, [])
	// console.log("data", data[0]?.id)
	if (loading) {
		return <div>Loading</div>
	}

	return (
		<Wrapper>
			<Title>{data[0]?.name}</Title>
			<Tagline>{data[0]?.tagline}</Tagline>
			<div>{data[0]?.first_brewed}</div>
			<div>{data[0]?.description}</div>
			<Numbers>
				<div>abv : {data[0]?.abv}</div>
				<div>ibu : {data[0]?.ibu}</div>
				<div>ph : {data[0]?.ph}</div>
			</Numbers>
			<Food>
				<div>Food Pairing</div>
				<div>
					{data[0]?.food_pairing.map((beer) => (
						<div>{beer}</div>
					))}
				</div>
			</Food>
			<BeerPhoto>
				<img src={data[0]?.image_url} alt="beer" />
			</BeerPhoto>
		</Wrapper>
	)
}

export default Detail
