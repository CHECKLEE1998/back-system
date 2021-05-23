import {
    Login
} from "@/api/all";
const state = {}

const getters = {

}

const mutations = {}

const actions = {
    login(content, repuestData) {
        return new Promise((resolve, reject) => {
            Login(repuestData).then((response) => {
                resolve(response)
            }).catch(error => {
                reject(error)
            })
        })
    }
}

export default {
    actions
}