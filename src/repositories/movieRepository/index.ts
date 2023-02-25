import { httpService } from "../../services/httpService";

export async function getMovieByTitle(title: string) {
  try {
    const response = await httpService.get(`movies/getMovieByTitle/${title}`);
    if (!response.data.Id) throw new Error();
    return response.data;
  } catch (error) {
    console.log(error)
  }
}
