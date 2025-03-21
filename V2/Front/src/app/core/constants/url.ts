const BASE_URL = 'http://192.168.247.134:3000';

// export const REGISTER_URL = `${BASE_URL}/register`;
// export const LOGIN_URL = `${BASE_URL}/login`;
// export const ME_URL = `${BASE_URL}/me`;
// export const USERS_URL = `${BASE_URL}/users`;
// export const USER_URL = `${BASE_URL}/user/`;
// export const PRODUCTS_URL = `${BASE_URL}/cars`;
// export const PRODUCT_URL = `${BASE_URL}/car/`;
// export const PRODUCT_CREATE_URL = `${PRODUCT_URL}/users`;

export const URL:any = {
    MODELS: `${BASE_URL}/models/`,
    BRANDS: `${BASE_URL}/brands/`,
    PRODUCTS: `${BASE_URL}/cars`,
    PRODUCTS_USER: `${BASE_URL}/cars/all`,
    PRODUCTS_ME: `${BASE_URL}/cars/self/all`,
    PRODUCT: `${BASE_URL}/car/`,
    IMAGES: `${BASE_URL}/car/images/`,
    IMAGE: `${BASE_URL}/car/image/`,
    DETAIL: `${BASE_URL}/car/detail/`,
    PRODUCT_CREATE: `${BASE_URL}/car/create`,
    REGISTER: `${BASE_URL}/register`,
    REGISTER_SELLER: `${BASE_URL}/register/seller/`,
    REGISTER_ADMIN: `${BASE_URL}/register/admin/`,
    REGISTER_SUPER_ADMIN: `${BASE_URL}/register/super/admin/`,
    LOGIN: `${BASE_URL}/login`,
    ME: `${BASE_URL}/me`,
    IS_ADMIN: `${BASE_URL}/admin/verify`,
    USERS: `${BASE_URL}/admin/users`,
    USER: `${BASE_URL}/admin/user/`,
    IS_SELLER: `${BASE_URL}/serller/verify`,
    COMPANY: `${BASE_URL}/company/`,
    COMPANIES: `${BASE_URL}/companies/`,
    COMPANY_LOGO: `${BASE_URL}/company/image/`
};
