import "@testing-library/jest-dom";

import { server } from './server/server'

beforeAll(() => server.listen())

afterEach(() => server.resetHandlers())

afterAll(() => server.close())