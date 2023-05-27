import { getCookie } from "cookies-next";
import { REPUBLIQUEI_JWT } from "~/utils";
import { api } from "./api";

class Republica {
    static async ObterImovelPorUsuarioId<T>(id?: any) {
        const token = getCookie(REPUBLIQUEI_JWT);

        if (token) {
            const headers = {
                Authorization: `Bearer ${token}`
            };


            return await api.get('/Imovel/ObterImovelPorUsuarioId', { headers });

        }
    }

}
export { Republica };