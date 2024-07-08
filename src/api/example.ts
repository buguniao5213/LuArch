import { Axios } from '@/api'

export function HTLLOWORD() {
    return Axios.get<any>('/json/example.json')
}