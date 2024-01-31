import { viewProfile } from "../api/profile/view.mjs";
import { load } from "../storage/index.mjs";

export async function renderProfile() {
  const { name } = load("profile");
  const profile = await viewProfile(name);

  // const profileName = document.querySelector("#profileName");
  // const profileEmail = document.querySelector("#profileEmail");
  const profileImage = document.querySelector("#profileImage");

  // profileName.innerText = profile.name;
  // profileEmail.innerText = profile.email;

  if (profile.avatar) {
    profileImage.src = profile.avatar;
    profileImage.style.objectFit = "cover";
  } else {
    profileImage.src = "/images/Canon_eos.jpg";
  }
}