import React, { useEffect, useState } from 'react'
import * as Realm from "realm-web"

export default function listMensagem() {
    const [mensagens, setMensagens] = useState('')
    console.log(mensagens)

    const getMessages = async () => {
        const app = new Realm.App({ id: "realm_salas-vlxiv" })
        const credentials = Realm.Credentials.anonymous()
        try {
            const user = await app.logIn(credentials)
            const resposta = await user.functions.getAllData()
            setMensagens(resposta)
        } catch (err) {
            console.error("Failed to login", err)
        }
    }
    
    useEffect(() => {
        getMessages()
    })
    
    return (
        <>
            <div className="h-96 bg-indigo-100 rounded border border-slate-300">
            {
                [mensagens].map((item) => {
                    return (
                        <div key={item._id}>
                            {item}
                        </div>
                    )
                })
            }
            </div>
        </>
    )
}
