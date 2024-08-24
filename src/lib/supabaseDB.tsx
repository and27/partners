import { supabase } from "./supabase";
type User = {
  name: string;
  email: string;
  supportType: string;
  projectStage: string;
};

export const addUserData = async (user: User) => {
  const userData = {
    name: user.name,
    email: user.email,
    challenge: user.supportType,
    status: user.projectStage,
  };

  const { data, error } = await supabase.from("userData").insert(userData);
  if (error) throw error;
  return data;
};
