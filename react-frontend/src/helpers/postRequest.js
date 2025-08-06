export const postRequest = async (url, body, method = "POST") => {
    try {
        const res = await fetch(url, {
            method,
            credentials: "include", // include cookies like XSRF-TOKEN and session
            body: JSON.stringify(body),
            headers: {
                "Content-Type": "application/json",
            },
        });

        const resultData = await res.json();
        return { ...resultData, status: res.status };
    } catch (error) {
        console.error("Error in postRequest:", error);
        throw error;
    }
};

// Call this once after app starts or before login/register/etc
export const getCSRF = async () => {
    await fetch("http://localhost:8000/sanctum/csrf-cookie", {
        credentials: "include",
    });
};

export const logout = async () => {
   
    try {
        await fetch("/logout", {
            method: "POST",
            credentials: "include",
            headers: {
                "X-CSRF-TOKEN": csrfToken,
                "Content-Type": "application/json",
            },
        });
        window.location.href = "/login";
    } catch (error) {
        console.error("Error in postRequest:", error);
        throw error;
    }
};
