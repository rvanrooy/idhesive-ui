/**
 * Generated by orval v7.7.0 🍺
 * Do not edit manually.
 * Idhesive API
 * Idhesive API for intelligent policy management and enforcement platform
 * OpenAPI spec version: 0.0.0
 */
import type { ErrorDetails } from './errorDetails';

export interface Error {
  /** Error code */
  code: string;
  /** Error message */
  message: string;
  /** Additional error details */
  details?: ErrorDetails;
}
