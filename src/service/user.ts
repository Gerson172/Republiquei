import { AxiosError } from "axios";
import { deleteCookie, getCookie } from "cookies-next";
import { api, ResponseError } from '~/service'
import { REPUBLIQUEI_JWT } from "~/utils";
import { setCookie, destroyCookie } from 'nookies';
import moment from "moment";
import { useQuery, useQueryClient } from "react-query";


type UserSignIn = {
    email: string;
    senha: string;
}

type UserSignUp = {

}

type ChangePassword = {

}

class User {
    static async signIn(
        user: UserSignIn | {} = {},
        ctx: any = {},
    ): Promise<any> {
        try {
            const { data } = await api.post('/Login/RealizarLogin', user);
            destroyCookie(ctx, REPUBLIQUEI_JWT);
            setCookie(ctx, REPUBLIQUEI_JWT, data.valor.acessToken, {
                path: '/',
                maxAge: 10000 * 60,
                sameSite: 'none',
                secure: true,
            });
        } catch (err) {
            throw err;
        }
    }

    static async getUser<T>(id?: any) {
        const token = getCookie(REPUBLIQUEI_JWT);

        if (token) {
            const headers = {
                Authorization: `Bearer ${token}`
            };

            if (id) {
                return await api.post('/Usuario/ObterUsuarioPorId', { id }, { headers });
            } else {
                return await api.get('/Usuario/ObterUsuarioPorId', { headers });
            }
        }
    }

}

export const useUser = () => {
    const queryClient = useQueryClient();
    const token = getCookie(REPUBLIQUEI_JWT);

    const fetchUser = async () => {
        if (token) {
            try {
                const response = await User.getUser();
                return response?.data.valor;
            } catch (error) {
                destroyCookie(null, REPUBLIQUEI_JWT);
                queryClient.removeQueries('user');
                throw error;
            }
        }
    }

    return useQuery('user', fetchUser, {
        enabled: !!token,
    });
}
export { User };