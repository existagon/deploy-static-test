import { serve } from "https://deno.land/x/sift/mod.ts";

serve({
  "/":() => fetch(new URL("./static.json", import.meta.url))
});