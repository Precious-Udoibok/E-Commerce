import { addDays, addMinutes } from "date-fns";

// Version
export const kDefaultApiVersion = "v1";

// Time
export const EMAIL_TOKEN_EXPIRATION_DURATION = "5m";
export const ACCESS_TOKEN_EXPIRATION_DURATION = "30Days";
export const REFRESH_TOKEN_EXPIRATION_DURATION = "50Days";
export const ACCOUNT_ID_KEY = "user-id";

// Use functions instead of static values
export const getEmailTokenExpirationTime = () => addMinutes(new Date(), 5);
export const getAccessTokenExpirationTime = () => addDays(new Date(), 35);
export const getRefreshTokenExpirationTime = () => addDays(new Date(), 50);

// Storage
export const kUsersAvatarSuffix = "user_avatar";
