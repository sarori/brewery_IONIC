import {
	IonContent,
	IonHeader,
	IonPage,
	IonTitle,
	IonToolbar,
	IonSlides,
	IonSlide,
} from "@ionic/react"
import ExploreContainer from "../components/ExploreContainer"
import "./Tab2.css"

const slideOpts = {
	initialSlide: 1,
	speed: 200,
	loop: true,
}

const Tab1: React.FC = () => {
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
				<IonSlides pager={true} options={slideOpts}>
					<IonSlide>
						<img
							src={
								"https://www.businessmarches.com/wp-content/uploads/2018/01/1510783588HMNIMariannePourShot1of1-960x639.jpg"
							}
							alt="logo"
							style={{ width: "90%", height: "400px" }}
						/>
					</IonSlide>
					<IonSlide>
						<img
							src={
								"https://www.brewdog.com/public/files/BLOG%20PHOTOS/NorwichOpen_5.jpg"
							}
							alt="logo"
							style={{ width: "90%", height: "400px" }}
						/>
					</IonSlide>
					<IonSlide>
						<img
							src={
								"https://www.brewdog.com/public/files/BLOG%20PHOTOS/PunkPairings_4.jpg"
							}
							alt="logo"
							style={{ width: "90%", height: "400px" }}
						/>
					</IonSlide>
				</IonSlides>
			</IonContent>
		</IonPage>
	)
}

export default Tab1
