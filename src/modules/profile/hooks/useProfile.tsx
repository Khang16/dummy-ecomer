import { useEffect, useState } from "react";
import { authApi } from "../../apis/auth";

interface UserResponse {
  id: number;
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  gender: string;
  image: string;
  bloodGroup: string;
  height: number;
  weight: number;
  eyeColor: string;
  hair: {
    color: string;
    type: string;
  };
  address: {
    address: string;
    city: string;
    state: string;
    postalCode: string;
    country: string;
  };
}

export const useProfile = () => {
  const [user, setUser] = useState<UserResponse | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const response = await authApi.getMe();
        const userData = response.data as UserResponse; 
        setUser(userData);
      } catch (error) {
        console.error("Failed to fetch user profile:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchUserProfile();
  }, []);

  return { user, loading };
};
