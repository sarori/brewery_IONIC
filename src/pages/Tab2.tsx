import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from "@ionic/react"
import ExploreContainer from "../components/ExploreContainer"
import "./Tab2.css"
import styled from "styled-components"

const Container = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
`

const Title = styled.div`
	font-size: 48px;
	font-weight: 500;
	letter-spacing: 2.5px;
	margin: 20px 0;
`

const Content = styled.div`
	font-size: 20px;
	margin: 20px 0;
`

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
				<img
					src={"https://www.brewdog.com/images/cms/blog/1580982829NewBrewDog_LEAD.jpg"}
					alt="logo"
					style={{ width: "100%" }}
				/>

				<Container>
					<Title>Our mission</Title>
					<Content>
						<div>
							{" "}
							BrewDog was born with the aim to revolutionize the beer industry and
							completely redefine beer-drinking culture. We’re determined to make a
							stand for independence, a stand for quality and stand for craft.
						</div>
						<div>
							OUR MISSION BREWDOG WAS BORN WITH THE AIM TO REVOLUTIONISE THE BEER
							INDUSTRY AND COMPLETELY REDEFINE BRITISH BEER-DRINKING CULTURE. A decade
							of dog, 1000 employees, and two breweries later, we are the fastest
							growing Food & Drinks company in the UK, one of the Times Top 100 Best
							Employers, and breaking into international markets like a shark on
							steroids. One thing, however, has always stayed the same. Nailed to the
							wall, written in blood, our mission is to make other people as
							passionate about great craft beer as we are.{" "}
						</div>
					</Content>
				</Container>
				{/* <IonHeader collapse="condense">
					<IonToolbar>
						<IonTitle size="large">Tab 2</IonTitle>
					</IonToolbar>
				</IonHeader>
				<ExploreContainer name="Tab 2 page" /> */}
			</IonContent>
			{/* BrewDog was born with the aim to revolutionize the beer industry and completely redefine
			beer-drinking culture. We’re determined to make a stand for independence, a stand for
			quality and stand for craft. */}
			{/* OUR MISSION BREWDOG WAS BORN WITH THE AIM TO REVOLUTIONISE THE BEER INDUSTRY AND
			COMPLETELY REDEFINE BRITISH BEER-DRINKING CULTURE. A decade of dog, 1000 employees, and
			two breweries later, we are the fastest growing Food & Drinks company in the UK, one of
			the Times Top 100 Best Employers, and breaking into international markets like a shark
			on steroids. One thing, however, has always stayed the same. Nailed to the wall, written
			in blood, our mission is to make other people as passionate about great craft beer as we
			are. */}
		</IonPage>
	)
}

export default Tab2
