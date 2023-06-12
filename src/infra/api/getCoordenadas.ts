import axios from "axios";
import { useEffect } from "react";

export default async function getCoordenadas(
	address: string,
): Promise<[number, number]> {

	const url = `https://nominatim.openstreetmap.org/search?q=${address}&format=json`;

	try {
		const response = await axios.get(url);
		const data = response.data;

		console.log(data[0].lat)

		if (data.length > 0) {
			const lat = parseFloat(data[0].lat);
			const lon = parseFloat(data[0].lon);
			return [lat, lon];
		} else {
			throw new Error('Endereço não encontrado.');
		}
	} catch (error) {
		console.error(error);
		throw new Error('Erro ao obter as coordenadas.');
	}
}
