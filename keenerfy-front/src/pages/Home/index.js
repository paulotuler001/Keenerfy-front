import Card from "../../components/Card"
import Header from "../../components/Header"
import './Home.css'

const Home = () =>{
    return (
        <div>
            <Header/>
            <section id="list-cards">
                <Card/>
                <Card/>
                <Card/>
                <Card/>
            </section>
        </div>
    )
}

export default Home