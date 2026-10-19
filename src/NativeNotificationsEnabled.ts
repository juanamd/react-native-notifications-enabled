import type { TurboModule } from 'react-native';
import { TurboModuleRegistry } from 'react-native';

export interface Spec extends TurboModule {
  areNotificationsEnabled(): Promise<boolean>;
}

// `get` (not `getEnforcing`) so importing this on iOS doesn't crash.
export default TurboModuleRegistry.get<Spec>('NotificationsEnabled');
