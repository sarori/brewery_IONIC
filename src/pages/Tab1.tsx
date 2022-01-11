// import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from "@ionic/react"
// import ExploreContainer from "../components/ExploreContainer"
// import "./Tab1.css"

// const Tab1: React.FC = () => {
// 	return (
// 		// <IonPage>
// 		// 	<IonHeader>
// 		// 		<IonToolbar>
// 		// 			<IonTitle>Tab 1</IonTitle>
// 		// 		</IonToolbar>
// 		// 	</IonHeader>
// 		// 	<IonContent fullscreen>
// 		// 		<IonHeader collapse="condense">
// 		// 			<IonToolbar>
// 		// 				<IonTitle size="large">Tab 1</IonTitle>
// 		// 			</IonToolbar>
// 		// 		</IonHeader>
// 		// 		<ExploreContainer name="Tab 1 page" />
// 		// 	</IonContent>
// 		// </IonPage>

// 	)
// }

// export default Tab1

import React, { useState } from "react"
import {
	IonContent,
	IonHeader,
	IonPage,
	IonTitle,
	IonToolbar,
	IonInput,
	IonItem,
	IonLabel,
	IonList,
	IonItemDivider,
} from "@ionic/react"

const Tab1: React.FC = () => {
	const [text, setText] = useState<string>()
	const [number, setNumber] = useState<number>()

	return (
		<IonPage>
			<IonHeader>
				<IonToolbar>
					<IonTitle>IonInput Examples</IonTitle>
				</IonToolbar>
			</IonHeader>
			<IonContent>
				<IonList>
					<IonItemDivider>Default Input with Placeholder</IonItemDivider>
					<IonItem>
						<IonInput
							value={text}
							placeholder="Enter Input"
							onIonChange={(e) => setText(e.detail.value!)}
						></IonInput>
					</IonItem>

					<IonItemDivider>Input with clear button when there is a value</IonItemDivider>
					<IonItem>
						<IonInput
							value={text}
							placeholder="Enter Input"
							onIonChange={(e) => setText(e.detail.value!)}
							clearInput
						></IonInput>
					</IonItem>

					<IonItemDivider>Number type input</IonItemDivider>
					<IonItem>
						<IonInput
							type="number"
							value={number}
							placeholder="Enter Number"
							onIonChange={(e) => setNumber(parseInt(e.detail.value!, 10))}
						></IonInput>
					</IonItem>

					<IonItemDivider>Disabled input</IonItemDivider>
					<IonItem>
						<IonInput value={text} disabled></IonInput>
					</IonItem>

					<IonItemDivider>Readonly input</IonItemDivider>
					<IonItem>
						<IonInput value={text} readonly></IonInput>
					</IonItem>

					<IonItemDivider>Inputs with labels</IonItemDivider>

					<IonItem>
						<IonLabel>Default Label</IonLabel>
						<IonInput></IonInput>
					</IonItem>

					<IonItem>
						<IonLabel position="floating">Floating Label</IonLabel>
						<IonInput value={text}></IonInput>
					</IonItem>

					<IonItem>
						<IonLabel position="fixed">Fixed Label</IonLabel>
						<IonInput value={text}></IonInput>
					</IonItem>

					<IonItem>
						<IonLabel position="stacked">Stacked Label</IonLabel>
						<IonInput value={text}> </IonInput>
					</IonItem>
				</IonList>
			</IonContent>
		</IonPage>
	)
}
export default Tab1
