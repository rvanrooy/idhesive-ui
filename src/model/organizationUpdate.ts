/**
 * Generated by orval v7.7.0 🍺
 * Do not edit manually.
 * Idhesive API
 * Idhesive API for intelligent policy management and enforcement platform
 * OpenAPI spec version: 0.0.0
 */
import type { OrganizationStatus } from './organizationStatus';
import type { OrganizationUpdateBranding } from './organizationUpdateBranding';

/**
 * Organization model
 */
export interface OrganizationUpdate {
  /** Organization name */
  name?: string;
  /** Organization description */
  description?: string;
  /** Organization status */
  status?: OrganizationStatus;
  /** Custom branding settings */
  branding?: OrganizationUpdateBranding;
}
