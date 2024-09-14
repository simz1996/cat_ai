import { PostHog } from "posthog-node";


let postHogClient: PostHog | null = null;

function serversideAnalytics() {
    if (typeof window === 'undefined' && !postHogClient) {
        postHogClient = new PostHog(
            process.env.NEXT_PUBLIC_POSTHOG_KEY || '',
            { host: process.env.NEXT_PUBLIC_POSTHOG_HOST }
        );
    }
    return postHogClient;
}
    
export const analyticsServerClient = serversideAnalytics();

export default analyticsServerClient;

