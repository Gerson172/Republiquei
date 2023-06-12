import axios from 'axios';
import getConfig from 'next/config';

const { publicRuntimeConfig } = getConfig();

const { BACKEND_URL } = publicRuntimeConfig;

export type ResponseError = {
	message: string;
	data: any;
	index?: number;
	take?: number;
	pages?: number;
	updated_at: string;
	status: string;
	status_code: number;
};

const api = axios.create({
	baseURL: `${BACKEND_URL}`,
});

export { api };
