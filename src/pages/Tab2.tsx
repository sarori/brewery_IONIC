import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from "@ionic/react"
import ExploreContainer from "../components/ExploreContainer"
import "./Tab2.css"

const Tab2: React.FC = () => {
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
				<IonHeader collapse="condense">
					<IonToolbar>
						<IonTitle size="large">Tab 2</IonTitle>
					</IonToolbar>
				</IonHeader>
				<ExploreContainer name="Tab 2 page" />
			</IonContent>
		</IonPage>
	)
}

export default Tab2
