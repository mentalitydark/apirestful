const dbUser = process.env.DB_USER
const dbPassword = process.env.DB_PASSWORD

export default {
    port: 3000,
    env: 'development',
    dbUri: `mongodb+srv://${dbUser}:${dbPassword}@cluster0.kxowikv.mongodb.net/?retryWrites=true&w=majority`
}