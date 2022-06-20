import { $authHost, $host } from "./index";

export const createType = async (type: { name: string }) => {
    const { data } = await $authHost.post('api/type', type);
    return data;
};

export const fetchTypes = async () => {
    const { data } = await $host.get('api/type/get');
    return data;
};

export const createBrand = async (brand: { name: string }) => {
    const { data } = await $authHost.post('api/brand', brand);
    return data;
};

export const fetchBrands = async () => {
    const { data } = await $host.get('api/brand/get',);
    return data;
};

export const createDevice = async (device: any) => {
    const { data } = await $authHost.post('api/device', device);
    return data;
};

export const fetchDevices = async (typeId?: number, brandId?: number, page?: number, limit = 5) => {
    const { data } = await $host.get('api/device/get', {
        params: {
            typeId, brandId, page, limit
        }
    });
    return data;
};

export const fetchOneDevice = async (id: number) => {
    const { data } = await $host.get('api/device/' + id);
    return data;
};