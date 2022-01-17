import "dotenv/config";
import App from "../../app";
import AuthenticationController from "../../authentication/authentication.controller";
import validateEnv from "../../utils/validateEnv";
import ReceptController from "../recept.controller";
import * as request from "supertest";

validateEnv();

let server: Express.Application;
let cookie: string | any;

beforeAll(async () => {
    server = new App([new AuthenticationController(), new ReceptController()]).getServer();
    const res = await request(server).post("/auth/login").send({
        email: "student001@jedlik.eu",
        password: "student001",
    });
    cookie = res.headers["set-cookie"];
});

describe("test API endpoints", () => {
    it("POST /receptek", async () => {
        const res = await request(server)
            .post("/receptek")
            .set("Cookie", cookie)
            .send({
                receptNév: "Túrósbukta csuszával",
                url: "mindmegette.hu",
                leírás: "A túrósbuktát csuszával megesszük",
                hozzávalók: ["túrósbukta", "csusza"],
            });
        expect(res.statusCode).toEqual(200);
        console.log(res.body);
    });
});
