import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./features/auth/authSlice";
import { claimSlice } from "./features/claim/claimSlice";

export const store = configureStore({
    reducer: {
        auth: authSlice.reducer,
        claim: claimSlice.reducer,
    }
})