import React, { useEffect, useState } from "react"
import { useParams } from "react-router"
import axios from "axios"
import styled from "styled-components"

const Wrapper = styled.div`
	color: white;
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
	const [data, setData] = useState<Partial<DataProps>>()

	useEffect(() => {
		const fetchData = async () => {
			setLoading(true)
			try {
				const { data: response } = await axios.get(`https://api.punkapi.com/v2/beers/${id}`)
				setData(response)
				console.log(data)
			} catch (error) {
				console.log(error)
			}
			setLoading(false)
		}
		fetchData()
	}, [])

	if (loading) {
		return <div>Loading</div>
	}

	return <Wrapper>{data?.id}</Wrapper>
}

export default Detail
