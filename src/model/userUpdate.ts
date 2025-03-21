/**
 * Generated by orval v7.7.0 🍺
 * Do not edit manually.
 * Idhesive API
 * Idhesive API for intelligent policy management and enforcement platform
 * OpenAPI spec version: 0.0.0
 */
import type { OrganizationRole } from './organizationRole';

/**
 * User model
 */
export interface UserUpdate {
  /** Email address */
  email?: string;
  /** First name */
  firstName?: string;
  /** Last name */
  lastName?: string;
  /** User role */
  role?: OrganizationRole;
  /** User status (active/inactive) */
  isActive?: boolean;
}
