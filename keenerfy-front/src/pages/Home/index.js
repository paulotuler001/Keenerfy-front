import Card from "../../components/Card"
import Header from "../../components/Header"
import SearchField from "../../components/SearchField"
import './Home.css'

const Home = () =>{
    return (
        <div>
            <Header/>
            <div id="container-list-card">
                <div>
                    <SearchField/>
                </div>
                <section id="list-cards">
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                </section>
            </div>
        </div>
    )
}

export default Home