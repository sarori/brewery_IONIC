import {
	IonContent,
	IonHeader,
	IonImg,
	IonItem,
	IonLabel,
	IonLoading,
	IonPage,
	IonThumbnail,
	IonTitle,
	IonToolbar,
} from "@ionic/react"
import axios from "axios"
import { useEffect, useState } from "react"
import "./Tab2.css"
import styled from "styled-components"
import { Link } from "react-router-dom"

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

type Item = {
	src: string
	text: string
}

const Abv_mark = styled.div`
	border: 1px solid #10a5d3;
	/* padding: 5px 10px; */
	background-color: #10a5d3;
	border-radius: 18px;
	width: 48px;
	height: 30px;
	display: flex;
	align-items: center;
	justify-content: center;
	font-weight: 600;
`
const Row = styled.div``

const Tab3: React.FC = () => {
	const [loading, setLoading] = useState(true)
	const [data, setData] = useState<Partial<DataProps>[]>([])

	useEffect(() => {
		const fetchData = async () => {
			setLoading(true)
			try {
				const { data: response } = await axios.get("https://api.punkapi.com/v2/beers")
				setData(response)
			} catch (error) {
				console.log(error)
			}
			setLoading(false)
		}

		fetchData()
	}, [])

	if (loading) {
		return <div>Loading...</div>
	}

	return (
		<IonPage>
			<IonHeader>
				<IonToolbar color="main">
					<IonTitle>
						<img
							src={
								"https://cdn.substack.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fbucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com%2Fpublic%2Fimages%2Fec6835cc-617b-4fa0-a56d-a5b4357c9522_1024x478.png"
							}
							alt="logo"
							style={{ width: "150px", height: "50px" }}
						/>
					</IonTitle>
				</IonToolbar>
			</IonHeader>
			<IonContent fullscreen>
				{loading ? (
					<IonLoading
						cssClass="my-custom-class"
						isOpen={loading}
						onDidDismiss={() => setLoading(false)}
						message={"Please wait..."}
						duration={5000}
					/>
				) : (
					data?.map((item, idx) => (
						<Row>
							<Link to={`/tab3/${item.id}`} style={{ textDecoration: "none" }}>
								<IonItem>
									<IonThumbnail slot="start">
										<IonImg
											src={item.image_url}
											style={{ objectFit: "contain" }}
										/>
									</IonThumbnail>
									<IonLabel
										style={{
											fontSize: "20px",
											padding: "20px 0",
											fontWeight: "700",
										}}
									>
										{item.name}
									</IonLabel>
									<Abv_mark key={item.id}>{item.abv}</Abv_mark>
								</IonItem>
							</Link>
						</Row>
					))
				)}
			</IonContent>
		</IonPage>
	)
}

export default Tab3
