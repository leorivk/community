const userData = [];

export const signin = (req, res) => {
        return res.render("signin");
}

export const signup = (req, res) => {
    if (req.method === "GET") {
        return res.render("signup");
    } else if (req.method === "POST") {
        const { email, username, password, password2 } = req.body;
        const user = {
            email, username, password
        }

        if (password !== password2) {
            return res.render("signup", { error_message: "Password doesn't match."});
        }

        for (const user of userData) {
            if (user.email === email) {
                return res.render("signup", { error_message: "This email already exists."});
            } else if (user.username === username) {
                return res.render("signup", { error_message: "This username already exists."});
            }
        }

        userData.push(user);
        return res.redirect("/sign-in");
    }
}