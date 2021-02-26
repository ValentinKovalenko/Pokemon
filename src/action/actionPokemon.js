import api from "../utils/api";

export async function find(name) {
    const {data} = await api.get(`api/v2/pokemon/${name}`)

    return data
}