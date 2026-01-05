import {
  BILLING_CYCLES,
  SUBSCRIPTION_STATUSES,
  SUBSCRIPTION_SOURCES,
} from "../constants/subscriptionConstants";

const DEFAULT_SUBSCRIPTION_PREVIEW = {
  billingCycle: BILLING_CYCLES.MONTHLY,
  status: SUBSCRIPTION_STATUSES.ACTIVE,
  source: SUBSCRIPTION_SOURCES.MANUAL,
};

export default function Home() {
  return (
    <main>
      <h1>Hello</h1>
    </main>
  );
}
