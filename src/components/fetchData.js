import axios from "axios"

async function fetchData() {
    const response = await axios.get("https://ddragon.leagueoflegends.com/cdn/12.5.1/data/en_US/champion.json")
    if (response.status === 200) {
        return response.data.data

    }
}

export default fetchData