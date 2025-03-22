interface User {
  email: string;
  name: string;
  id: number;
  role: string;
}

export class LoginError extends Error {
  constructor() {
    super('User not found');
    this.name = 'LoginError';
  }
}

export const login = async (email: string, password: string): Promise<User> => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  if (email === 'test@test.test' && password === 'password') {
    return { email, name: 'Test User', id: 1, role: 'user' };
  } else {
    throw new LoginError();
  }
};

export const logout = async (): Promise<void> => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
};
