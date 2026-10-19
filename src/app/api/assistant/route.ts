import { respond } from "@/lib/panela-ia";
import { getOverview } from "@/lib/queries";
import { InputError, asText } from "@/lib/validators";

export const dynamic = "force-dynamic";

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as { question?: unknown };
    const question = asText(body.question, "Consulta", 2, 2000);
    const overview = await getOverview();
    return Response.json(respond(question, overview));
  } catch (error) {
    const message = error instanceof InputError ? error.message : "No se pudo responder la consulta.";
    return Response.json({ error: message }, { status: error instanceof InputError ? 400 : 500 });
  }
}
