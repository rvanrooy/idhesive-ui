/**
 * Generated by orval v7.7.0 🍺
 * Do not edit manually.
 * Idhesive API
 * Idhesive API for intelligent policy management and enforcement platform
 * OpenAPI spec version: 0.0.0
 */
import { faker } from '@faker-js/faker';

import { HttpResponse, delay, http } from 'msw';

import { OrganizationRole, OrganizationStatus } from '.././model';
import type {
  AuthResponse,
  Organization,
  Project,
  Team,
  TokenInfo,
  User
} from '.././model';

export const getAuthLoginResponseMock = (
  overrideResponse: Partial<AuthResponse> = {}
): AuthResponse => ({
  token: {
    ...{
      accessToken: faker.string.alpha(20),
      refreshToken: faker.string.alpha(20),
      tokenType: faker.string.alpha(20),
      expiresIn: faker.number.int({ min: undefined, max: undefined }),
      refreshExpiresIn: faker.number.int({ min: undefined, max: undefined })
    }
  },
  user: {
    ...{
      id: faker.string.alpha(20),
      email: faker.string.alpha(20),
      firstName: faker.string.alpha(20),
      lastName: faker.string.alpha(20),
      role: faker.helpers.arrayElement(Object.values(OrganizationRole)),
      isActive: faker.datatype.boolean(),
      createdAt: faker.string.alpha(20),
      updatedAt: faker.string.alpha(20)
    }
  },
  ...overrideResponse
});

export const getAuthRefreshTokenResponseMock = (
  overrideResponse: Partial<TokenInfo> = {}
): TokenInfo => ({
  accessToken: faker.string.alpha(20),
  refreshToken: faker.string.alpha(20),
  tokenType: faker.string.alpha(20),
  expiresIn: faker.number.int({ min: undefined, max: undefined }),
  refreshExpiresIn: faker.number.int({ min: undefined, max: undefined }),
  ...overrideResponse
});

export const getAuthSignupResponseMock = (
  overrideResponse: Partial<AuthResponse> = {}
): AuthResponse => ({
  token: {
    ...{
      accessToken: faker.string.alpha(20),
      refreshToken: faker.string.alpha(20),
      tokenType: faker.string.alpha(20),
      expiresIn: faker.number.int({ min: undefined, max: undefined }),
      refreshExpiresIn: faker.number.int({ min: undefined, max: undefined })
    }
  },
  user: {
    ...{
      id: faker.string.alpha(20),
      email: faker.string.alpha(20),
      firstName: faker.string.alpha(20),
      lastName: faker.string.alpha(20),
      role: faker.helpers.arrayElement(Object.values(OrganizationRole)),
      isActive: faker.datatype.boolean(),
      createdAt: faker.string.alpha(20),
      updatedAt: faker.string.alpha(20)
    }
  },
  ...overrideResponse
});

export const getOrganizationsCreateResponseMock = (
  overrideResponse: Partial<Organization> = {}
): Organization => ({
  id: faker.string.alpha(20),
  name: faker.string.alpha(20),
  description: faker.helpers.arrayElement([faker.string.alpha(20), undefined]),
  status: faker.helpers.arrayElement(Object.values(OrganizationStatus)),
  branding: faker.helpers.arrayElement([{}, undefined]),
  createdAt: faker.string.alpha(20),
  updatedAt: faker.string.alpha(20),
  ...overrideResponse
});

export const getOrganizationsListResponseMock = (): Organization[] =>
  Array.from(
    { length: faker.number.int({ min: 1, max: 10 }) },
    (_, i) => i + 1
  ).map(() => ({
    id: faker.string.alpha(20),
    name: faker.string.alpha(20),
    description: faker.helpers.arrayElement([
      faker.string.alpha(20),
      undefined
    ]),
    status: faker.helpers.arrayElement(Object.values(OrganizationStatus)),
    branding: faker.helpers.arrayElement([{}, undefined]),
    createdAt: faker.string.alpha(20),
    updatedAt: faker.string.alpha(20)
  }));

export const getOrganizationsGetResponseMock = (
  overrideResponse: Partial<Organization> = {}
): Organization => ({
  id: faker.string.alpha(20),
  name: faker.string.alpha(20),
  description: faker.helpers.arrayElement([faker.string.alpha(20), undefined]),
  status: faker.helpers.arrayElement(Object.values(OrganizationStatus)),
  branding: faker.helpers.arrayElement([{}, undefined]),
  createdAt: faker.string.alpha(20),
  updatedAt: faker.string.alpha(20),
  ...overrideResponse
});

export const getOrganizationsUpdateResponseMock = (
  overrideResponse: Partial<Organization> = {}
): Organization => ({
  id: faker.string.alpha(20),
  name: faker.string.alpha(20),
  description: faker.helpers.arrayElement([faker.string.alpha(20), undefined]),
  status: faker.helpers.arrayElement(Object.values(OrganizationStatus)),
  branding: faker.helpers.arrayElement([{}, undefined]),
  createdAt: faker.string.alpha(20),
  updatedAt: faker.string.alpha(20),
  ...overrideResponse
});

export const getProjectsCreateResponseMock = (
  overrideResponse: Partial<Project> = {}
): Project => ({
  id: faker.string.alpha(20),
  organizationId: faker.string.alpha(20),
  name: faker.string.alpha(20),
  description: faker.helpers.arrayElement([faker.string.alpha(20), undefined]),
  createdAt: faker.string.alpha(20),
  updatedAt: faker.string.alpha(20),
  ...overrideResponse
});

export const getProjectsListResponseMock = (): Project[] =>
  Array.from(
    { length: faker.number.int({ min: 1, max: 10 }) },
    (_, i) => i + 1
  ).map(() => ({
    id: faker.string.alpha(20),
    organizationId: faker.string.alpha(20),
    name: faker.string.alpha(20),
    description: faker.helpers.arrayElement([
      faker.string.alpha(20),
      undefined
    ]),
    createdAt: faker.string.alpha(20),
    updatedAt: faker.string.alpha(20)
  }));

export const getProjectsGetResponseMock = (
  overrideResponse: Partial<Project> = {}
): Project => ({
  id: faker.string.alpha(20),
  organizationId: faker.string.alpha(20),
  name: faker.string.alpha(20),
  description: faker.helpers.arrayElement([faker.string.alpha(20), undefined]),
  createdAt: faker.string.alpha(20),
  updatedAt: faker.string.alpha(20),
  ...overrideResponse
});

export const getProjectsUpdateResponseMock = (
  overrideResponse: Partial<Project> = {}
): Project => ({
  id: faker.string.alpha(20),
  organizationId: faker.string.alpha(20),
  name: faker.string.alpha(20),
  description: faker.helpers.arrayElement([faker.string.alpha(20), undefined]),
  createdAt: faker.string.alpha(20),
  updatedAt: faker.string.alpha(20),
  ...overrideResponse
});

export const getTeamsCreateResponseMock = (
  overrideResponse: Partial<Team> = {}
): Team => ({
  id: faker.string.alpha(20),
  organizationId: faker.string.alpha(20),
  name: faker.string.alpha(20),
  description: faker.helpers.arrayElement([faker.string.alpha(20), undefined]),
  createdAt: faker.string.alpha(20),
  updatedAt: faker.string.alpha(20),
  ...overrideResponse
});

export const getTeamsListResponseMock = (): Team[] =>
  Array.from(
    { length: faker.number.int({ min: 1, max: 10 }) },
    (_, i) => i + 1
  ).map(() => ({
    id: faker.string.alpha(20),
    organizationId: faker.string.alpha(20),
    name: faker.string.alpha(20),
    description: faker.helpers.arrayElement([
      faker.string.alpha(20),
      undefined
    ]),
    createdAt: faker.string.alpha(20),
    updatedAt: faker.string.alpha(20)
  }));

export const getTeamsGetResponseMock = (
  overrideResponse: Partial<Team> = {}
): Team => ({
  id: faker.string.alpha(20),
  organizationId: faker.string.alpha(20),
  name: faker.string.alpha(20),
  description: faker.helpers.arrayElement([faker.string.alpha(20), undefined]),
  createdAt: faker.string.alpha(20),
  updatedAt: faker.string.alpha(20),
  ...overrideResponse
});

export const getTeamsUpdateResponseMock = (
  overrideResponse: Partial<Team> = {}
): Team => ({
  id: faker.string.alpha(20),
  organizationId: faker.string.alpha(20),
  name: faker.string.alpha(20),
  description: faker.helpers.arrayElement([faker.string.alpha(20), undefined]),
  createdAt: faker.string.alpha(20),
  updatedAt: faker.string.alpha(20),
  ...overrideResponse
});

export const getUsersCreateResponseMock = (
  overrideResponse: Partial<User> = {}
): User => ({
  id: faker.string.alpha(20),
  email: faker.string.alpha(20),
  firstName: faker.string.alpha(20),
  lastName: faker.string.alpha(20),
  role: faker.helpers.arrayElement(Object.values(OrganizationRole)),
  isActive: faker.datatype.boolean(),
  createdAt: faker.string.alpha(20),
  updatedAt: faker.string.alpha(20),
  ...overrideResponse
});

export const getUsersListResponseMock = (): User[] =>
  Array.from(
    { length: faker.number.int({ min: 1, max: 10 }) },
    (_, i) => i + 1
  ).map(() => ({
    id: faker.string.alpha(20),
    email: faker.string.alpha(20),
    firstName: faker.string.alpha(20),
    lastName: faker.string.alpha(20),
    role: faker.helpers.arrayElement(Object.values(OrganizationRole)),
    isActive: faker.datatype.boolean(),
    createdAt: faker.string.alpha(20),
    updatedAt: faker.string.alpha(20)
  }));

export const getUsersGetResponseMock = (
  overrideResponse: Partial<User> = {}
): User => ({
  id: faker.string.alpha(20),
  email: faker.string.alpha(20),
  firstName: faker.string.alpha(20),
  lastName: faker.string.alpha(20),
  role: faker.helpers.arrayElement(Object.values(OrganizationRole)),
  isActive: faker.datatype.boolean(),
  createdAt: faker.string.alpha(20),
  updatedAt: faker.string.alpha(20),
  ...overrideResponse
});

export const getUsersUpdateResponseMock = (
  overrideResponse: Partial<User> = {}
): User => ({
  id: faker.string.alpha(20),
  email: faker.string.alpha(20),
  firstName: faker.string.alpha(20),
  lastName: faker.string.alpha(20),
  role: faker.helpers.arrayElement(Object.values(OrganizationRole)),
  isActive: faker.datatype.boolean(),
  createdAt: faker.string.alpha(20),
  updatedAt: faker.string.alpha(20),
  ...overrideResponse
});

export const getAuthLoginMockHandler = (
  overrideResponse?:
    | AuthResponse
    | ((
        info: Parameters<Parameters<typeof http.post>[1]>[0]
      ) => Promise<AuthResponse> | AuthResponse)
) => {
  return http.post('*/auth/login', async (info) => {
    await delay(1000);

    return new HttpResponse(
      JSON.stringify(
        overrideResponse !== undefined
          ? typeof overrideResponse === 'function'
            ? await overrideResponse(info)
            : overrideResponse
          : getAuthLoginResponseMock()
      ),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );
  });
};

export const getAuthLogoutMockHandler = (
  overrideResponse?:
    | void
    | ((
        info: Parameters<Parameters<typeof http.post>[1]>[0]
      ) => Promise<void> | void)
) => {
  return http.post('*/auth/logout', async (info) => {
    await delay(1000);
    if (typeof overrideResponse === 'function') {
      await overrideResponse(info);
    }
    return new HttpResponse(null, { status: 204 });
  });
};

export const getAuthRefreshTokenMockHandler = (
  overrideResponse?:
    | TokenInfo
    | ((
        info: Parameters<Parameters<typeof http.post>[1]>[0]
      ) => Promise<TokenInfo> | TokenInfo)
) => {
  return http.post('*/auth/refresh', async (info) => {
    await delay(1000);

    return new HttpResponse(
      JSON.stringify(
        overrideResponse !== undefined
          ? typeof overrideResponse === 'function'
            ? await overrideResponse(info)
            : overrideResponse
          : getAuthRefreshTokenResponseMock()
      ),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );
  });
};

export const getAuthSignupMockHandler = (
  overrideResponse?:
    | AuthResponse
    | ((
        info: Parameters<Parameters<typeof http.post>[1]>[0]
      ) => Promise<AuthResponse> | AuthResponse)
) => {
  return http.post('*/auth/signup', async (info) => {
    await delay(1000);

    return new HttpResponse(
      JSON.stringify(
        overrideResponse !== undefined
          ? typeof overrideResponse === 'function'
            ? await overrideResponse(info)
            : overrideResponse
          : getAuthSignupResponseMock()
      ),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );
  });
};

export const getOrganizationsCreateMockHandler = (
  overrideResponse?:
    | Organization
    | ((
        info: Parameters<Parameters<typeof http.post>[1]>[0]
      ) => Promise<Organization> | Organization)
) => {
  return http.post('*/organizations', async (info) => {
    await delay(1000);

    return new HttpResponse(
      JSON.stringify(
        overrideResponse !== undefined
          ? typeof overrideResponse === 'function'
            ? await overrideResponse(info)
            : overrideResponse
          : getOrganizationsCreateResponseMock()
      ),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );
  });
};

export const getOrganizationsListMockHandler = (
  overrideResponse?:
    | Organization[]
    | ((
        info: Parameters<Parameters<typeof http.get>[1]>[0]
      ) => Promise<Organization[]> | Organization[])
) => {
  return http.get('*/organizations', async (info) => {
    await delay(1000);

    return new HttpResponse(
      JSON.stringify(
        overrideResponse !== undefined
          ? typeof overrideResponse === 'function'
            ? await overrideResponse(info)
            : overrideResponse
          : getOrganizationsListResponseMock()
      ),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );
  });
};

export const getOrganizationsGetMockHandler = (
  overrideResponse?:
    | Organization
    | ((
        info: Parameters<Parameters<typeof http.get>[1]>[0]
      ) => Promise<Organization> | Organization)
) => {
  return http.get('*/organizations/:id', async (info) => {
    await delay(1000);

    return new HttpResponse(
      JSON.stringify(
        overrideResponse !== undefined
          ? typeof overrideResponse === 'function'
            ? await overrideResponse(info)
            : overrideResponse
          : getOrganizationsGetResponseMock()
      ),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );
  });
};

export const getOrganizationsUpdateMockHandler = (
  overrideResponse?:
    | Organization
    | ((
        info: Parameters<Parameters<typeof http.patch>[1]>[0]
      ) => Promise<Organization> | Organization)
) => {
  return http.patch('*/organizations/:id', async (info) => {
    await delay(1000);

    return new HttpResponse(
      JSON.stringify(
        overrideResponse !== undefined
          ? typeof overrideResponse === 'function'
            ? await overrideResponse(info)
            : overrideResponse
          : getOrganizationsUpdateResponseMock()
      ),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );
  });
};

export const getOrganizationsDeleteMockHandler = (
  overrideResponse?:
    | void
    | ((
        info: Parameters<Parameters<typeof http.delete>[1]>[0]
      ) => Promise<void> | void)
) => {
  return http.delete('*/organizations/:id', async (info) => {
    await delay(1000);
    if (typeof overrideResponse === 'function') {
      await overrideResponse(info);
    }
    return new HttpResponse(null, { status: 204 });
  });
};

export const getProjectsCreateMockHandler = (
  overrideResponse?:
    | Project
    | ((
        info: Parameters<Parameters<typeof http.post>[1]>[0]
      ) => Promise<Project> | Project)
) => {
  return http.post(
    '*/organizations/:organizationId/projeects',
    async (info) => {
      await delay(1000);

      return new HttpResponse(
        JSON.stringify(
          overrideResponse !== undefined
            ? typeof overrideResponse === 'function'
              ? await overrideResponse(info)
              : overrideResponse
            : getProjectsCreateResponseMock()
        ),
        { status: 200, headers: { 'Content-Type': 'application/json' } }
      );
    }
  );
};

export const getProjectsListMockHandler = (
  overrideResponse?:
    | Project[]
    | ((
        info: Parameters<Parameters<typeof http.get>[1]>[0]
      ) => Promise<Project[]> | Project[])
) => {
  return http.get('*/organizations/:organizationId/projeects', async (info) => {
    await delay(1000);

    return new HttpResponse(
      JSON.stringify(
        overrideResponse !== undefined
          ? typeof overrideResponse === 'function'
            ? await overrideResponse(info)
            : overrideResponse
          : getProjectsListResponseMock()
      ),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );
  });
};

export const getProjectsGetMockHandler = (
  overrideResponse?:
    | Project
    | ((
        info: Parameters<Parameters<typeof http.get>[1]>[0]
      ) => Promise<Project> | Project)
) => {
  return http.get(
    '*/organizations/:organizationId/projeects/:id',
    async (info) => {
      await delay(1000);

      return new HttpResponse(
        JSON.stringify(
          overrideResponse !== undefined
            ? typeof overrideResponse === 'function'
              ? await overrideResponse(info)
              : overrideResponse
            : getProjectsGetResponseMock()
        ),
        { status: 200, headers: { 'Content-Type': 'application/json' } }
      );
    }
  );
};

export const getProjectsUpdateMockHandler = (
  overrideResponse?:
    | Project
    | ((
        info: Parameters<Parameters<typeof http.patch>[1]>[0]
      ) => Promise<Project> | Project)
) => {
  return http.patch(
    '*/organizations/:organizationId/projeects/:id',
    async (info) => {
      await delay(1000);

      return new HttpResponse(
        JSON.stringify(
          overrideResponse !== undefined
            ? typeof overrideResponse === 'function'
              ? await overrideResponse(info)
              : overrideResponse
            : getProjectsUpdateResponseMock()
        ),
        { status: 200, headers: { 'Content-Type': 'application/json' } }
      );
    }
  );
};

export const getProjectsDeleteMockHandler = (
  overrideResponse?:
    | void
    | ((
        info: Parameters<Parameters<typeof http.delete>[1]>[0]
      ) => Promise<void> | void)
) => {
  return http.delete(
    '*/organizations/:organizationId/projeects/:id',
    async (info) => {
      await delay(1000);
      if (typeof overrideResponse === 'function') {
        await overrideResponse(info);
      }
      return new HttpResponse(null, { status: 204 });
    }
  );
};

export const getTeamsCreateMockHandler = (
  overrideResponse?:
    | Team
    | ((
        info: Parameters<Parameters<typeof http.post>[1]>[0]
      ) => Promise<Team> | Team)
) => {
  return http.post('*/organizations/:organizationId/teams', async (info) => {
    await delay(1000);

    return new HttpResponse(
      JSON.stringify(
        overrideResponse !== undefined
          ? typeof overrideResponse === 'function'
            ? await overrideResponse(info)
            : overrideResponse
          : getTeamsCreateResponseMock()
      ),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );
  });
};

export const getTeamsListMockHandler = (
  overrideResponse?:
    | Team[]
    | ((
        info: Parameters<Parameters<typeof http.get>[1]>[0]
      ) => Promise<Team[]> | Team[])
) => {
  return http.get('*/organizations/:organizationId/teams', async (info) => {
    await delay(1000);

    return new HttpResponse(
      JSON.stringify(
        overrideResponse !== undefined
          ? typeof overrideResponse === 'function'
            ? await overrideResponse(info)
            : overrideResponse
          : getTeamsListResponseMock()
      ),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );
  });
};

export const getTeamsGetMockHandler = (
  overrideResponse?:
    | Team
    | ((
        info: Parameters<Parameters<typeof http.get>[1]>[0]
      ) => Promise<Team> | Team)
) => {
  return http.get('*/organizations/:organizationId/teams/:id', async (info) => {
    await delay(1000);

    return new HttpResponse(
      JSON.stringify(
        overrideResponse !== undefined
          ? typeof overrideResponse === 'function'
            ? await overrideResponse(info)
            : overrideResponse
          : getTeamsGetResponseMock()
      ),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );
  });
};

export const getTeamsUpdateMockHandler = (
  overrideResponse?:
    | Team
    | ((
        info: Parameters<Parameters<typeof http.patch>[1]>[0]
      ) => Promise<Team> | Team)
) => {
  return http.patch(
    '*/organizations/:organizationId/teams/:id',
    async (info) => {
      await delay(1000);

      return new HttpResponse(
        JSON.stringify(
          overrideResponse !== undefined
            ? typeof overrideResponse === 'function'
              ? await overrideResponse(info)
              : overrideResponse
            : getTeamsUpdateResponseMock()
        ),
        { status: 200, headers: { 'Content-Type': 'application/json' } }
      );
    }
  );
};

export const getTeamsDeleteMockHandler = (
  overrideResponse?:
    | void
    | ((
        info: Parameters<Parameters<typeof http.delete>[1]>[0]
      ) => Promise<void> | void)
) => {
  return http.delete(
    '*/organizations/:organizationId/teams/:id',
    async (info) => {
      await delay(1000);
      if (typeof overrideResponse === 'function') {
        await overrideResponse(info);
      }
      return new HttpResponse(null, { status: 204 });
    }
  );
};

export const getUsersCreateMockHandler = (
  overrideResponse?:
    | User
    | ((
        info: Parameters<Parameters<typeof http.post>[1]>[0]
      ) => Promise<User> | User)
) => {
  return http.post('*/organizations/:organizationId/users', async (info) => {
    await delay(1000);

    return new HttpResponse(
      JSON.stringify(
        overrideResponse !== undefined
          ? typeof overrideResponse === 'function'
            ? await overrideResponse(info)
            : overrideResponse
          : getUsersCreateResponseMock()
      ),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );
  });
};

export const getUsersListMockHandler = (
  overrideResponse?:
    | User[]
    | ((
        info: Parameters<Parameters<typeof http.get>[1]>[0]
      ) => Promise<User[]> | User[])
) => {
  return http.get('*/organizations/:organizationId/users', async (info) => {
    await delay(1000);

    return new HttpResponse(
      JSON.stringify(
        overrideResponse !== undefined
          ? typeof overrideResponse === 'function'
            ? await overrideResponse(info)
            : overrideResponse
          : getUsersListResponseMock()
      ),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );
  });
};

export const getUsersGetMockHandler = (
  overrideResponse?:
    | User
    | ((
        info: Parameters<Parameters<typeof http.get>[1]>[0]
      ) => Promise<User> | User)
) => {
  return http.get('*/organizations/:organizationId/users/:id', async (info) => {
    await delay(1000);

    return new HttpResponse(
      JSON.stringify(
        overrideResponse !== undefined
          ? typeof overrideResponse === 'function'
            ? await overrideResponse(info)
            : overrideResponse
          : getUsersGetResponseMock()
      ),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );
  });
};

export const getUsersUpdateMockHandler = (
  overrideResponse?:
    | User
    | ((
        info: Parameters<Parameters<typeof http.patch>[1]>[0]
      ) => Promise<User> | User)
) => {
  return http.patch(
    '*/organizations/:organizationId/users/:id',
    async (info) => {
      await delay(1000);

      return new HttpResponse(
        JSON.stringify(
          overrideResponse !== undefined
            ? typeof overrideResponse === 'function'
              ? await overrideResponse(info)
              : overrideResponse
            : getUsersUpdateResponseMock()
        ),
        { status: 200, headers: { 'Content-Type': 'application/json' } }
      );
    }
  );
};

export const getUsersDeleteMockHandler = (
  overrideResponse?:
    | void
    | ((
        info: Parameters<Parameters<typeof http.delete>[1]>[0]
      ) => Promise<void> | void)
) => {
  return http.delete(
    '*/organizations/:organizationId/users/:id',
    async (info) => {
      await delay(1000);
      if (typeof overrideResponse === 'function') {
        await overrideResponse(info);
      }
      return new HttpResponse(null, { status: 204 });
    }
  );
};
export const getDefaultMock = () => [
  getAuthLoginMockHandler(),
  getAuthLogoutMockHandler(),
  getAuthRefreshTokenMockHandler(),
  getAuthSignupMockHandler(),
  getOrganizationsCreateMockHandler(),
  getOrganizationsListMockHandler(),
  getOrganizationsGetMockHandler(),
  getOrganizationsUpdateMockHandler(),
  getOrganizationsDeleteMockHandler(),
  getProjectsCreateMockHandler(),
  getProjectsListMockHandler(),
  getProjectsGetMockHandler(),
  getProjectsUpdateMockHandler(),
  getProjectsDeleteMockHandler(),
  getTeamsCreateMockHandler(),
  getTeamsListMockHandler(),
  getTeamsGetMockHandler(),
  getTeamsUpdateMockHandler(),
  getTeamsDeleteMockHandler(),
  getUsersCreateMockHandler(),
  getUsersListMockHandler(),
  getUsersGetMockHandler(),
  getUsersUpdateMockHandler(),
  getUsersDeleteMockHandler()
];
