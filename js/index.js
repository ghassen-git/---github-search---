async function searchByUser(username) {
  try {
    const res = await fetch(`https://api.github.com/users/${username}`);
    if (!res.ok) {
      throw new Error("Error invalid username");
    }
    const user = await res.json();
    return user;
  } catch (err) {
    console.error(err);
  }
}
const accContainer = document.querySelector(".account");
const imgUser = document.querySelector(".user-img");
const nameTag = document.querySelector(".name");
const date = document.querySelector(".date");
const userName = document.querySelector(".user-name");
const bio = document.querySelector(".bio");
const repos = document.querySelector(".repos");
const followers = document.querySelector(".followers");
const following = document.querySelector(".following");
const locationx = document.querySelector(".location");
const github = document.querySelector(".github-link");
const twitter = document.querySelector(".X-link");
const company = document.querySelector(".company");
const searchBtn = document.querySelector(".search-btn");

searchBtn.addEventListener("click", function (e) {
  const user = e.target.closest(".search-bar").querySelector("input").value;
  console.log(user);

  searchByUser(user).then(function (user) {
    imgUser.src = user.avatar_url;
    followers.textContent = user.followers;
    following.textContent = user.following;
    userName.textContent = "@" + user.login;
    repos.textContent = user.public_repos;
    if (user.bio) {
      bio.classList.remove("not-available");
      bio.textContent = user.bio;
    } else {
      bio.textContent = "This profile has no bio";
      bio.classList.add("not-available");
    }
    if (user.company) {
      company.parentElement.classList.remove("not-available");
      company.textContent = user.company;
    } else {
      company.textContent = "Not Available";
      company.parentElement.classList.add("not-available");
    }
    if (user.created_at) {
      const dateJoin = new Date(user.created_at);
      date.classList.remove("not-available");
      date.textContent = `joined ${dateJoin.getDate()} ${dateJoin
        .toString()
        .slice(4, 7)} ${dateJoin.getFullYear()}`;
    } else {
      date.textContent = "Not Available";
      date.classList.add("not-available");
    }

    if (user.location) {
      locationx.parentElement.classList.remove("not-available");
      locationx.textContent = user.location;
    } else {
      locationx.textContent = "Not Available";
      locationx.parentElement.classList.add("not-available");
    }

    if (user.twitter_username) {
      twitter.parentElement.classList.remove("not-available");
      twitter.textContent = user.twitter_username;
    } else {
      user.textContent = "Not Available";
      twitter.parentElement.classList.add("not-available");
    }
    if (user.name) {
      nameTag.classList.remove("not-available");
      nameTag.textContent = user.name;
    } else {
      nameTag.textContent = "Not Available";
      nameTag.classList.add("not-available");
    }
    if (user.html_url) {
      github.parentElement.classList.remove("not-available");
      github.textContent = user.html_url;
    } else {
      github.textContent = "Not Available";
      github.parentElement.classList.add("not-available");
    }
    accContainer.classList.add("op-showed");
  });
});
const body = document.querySelector("body");
const dark = document.querySelector(".dark");
const light = document.querySelector(".light");
dark.addEventListener("click", function (e) {
  body.classList.remove("lightMode");
  body.classList.add("darkMode");

  dark.style.display = "none";
  light.style.display = "block";
});

light.addEventListener("click", function (e) {
  body.classList.remove("darkMode");
  body.classList.add("lightMode");
  dark.style.display = "block";
  light.style.display = "none";
});
