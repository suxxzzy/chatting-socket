import express, {
  Request,
  Response,
  NextFunction,
  ErrorRequestHandler,
} from "express";
import dotenv from "dotenv";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import cookieParser from "cookie-parser";

import { AppDataSource } from "./data-source";
import indexRouter from "./routes/index";

//import { User } from "./entity/User";/

dotenv.config();

// :ResponseConnect typeORM mysql
AppDataSource.initialize()
  .then(async () => {
    console.log("Data Source has been initialized!");
    // create express app
    const app = express();

    // register express routes from defined application routes
    // Routes.forEach((route) => {
    //   (app as any)[route.method](
    //     route.route,
    //     (req: Request, res: Response, next: Function) => {
    //       const result = new (route.controller as any)()[route.action](
    //         req,
    //         res,
    //         next
    //       );
    //       if (result instanceof Promise) {
    //         result.then((result) =>
    //           result !== null && result !== undefined
    //             ? res.send(result)
    //             : undefined
    //         );
    //       } else if (result !== null && result !== undefined) {
    //         res.json(result);
    //       }
    //     }
    //   );
    // });

    // setup express app here
    const port = process.env.PORT || 80;

    const corsOptions = {
      origin: "http://localhost:3000",
      credentials: true,
    };

    app.use(helmet());
    app.use(morgan("dev"));
    app.use(express.json()); // json 파싱
    app.use(express.urlencoded({ extended: false })); // uri 파싱
    app.use(cors(corsOptions));
    app.use(cookieParser());

    //모든 루트 요청은 indexRouter로!
    app.use("/", indexRouter);

    //배포 환경에서 정상 응답 받는지 테스트하는 코드
    app.get("/", (req: Request, res: Response) => {
      res.send("hello world");
    });

    //일부러 에러 발생시키기 테스트
    app.use((req: Request, res: Response, next: NextFunction) => {
      res.status(404).send("error!!");
    });

    //서버에러
    const errorHandler: ErrorRequestHandler = (err, req, res, next) => {};
    app.use(errorHandler);

    // start express server
    app.listen(port, () => {
      console.log(
        `Express server has started on port ${port}. Open http://localhost:${port}/users to see results`
      );
    });

    // insert new users for test
    // await AppDataSource.manager.save(
    //   AppDataSource.manager.create(User, {
    //     firstName: "Timber",
    //     lastName: "Saw",
    //     age: 27,
    //   })
    // );

    // await AppDataSource.manager.save(
    //   AppDataSource.manager.create(User, {
    //     firstName: "Phantom",
    //     lastName: "Assassin",
    //     age: 24,
    //   })
    // );
  })
  .catch((error) => console.log(error));
