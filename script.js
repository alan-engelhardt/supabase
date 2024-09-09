const url = "https://jftyavgnjvzhcjchqdpg.supabase.co//rest/v1/test_e24_1";

const key = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpmdHlhdmduanZ6aGNqY2hxZHBnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDc3NTQ3MTIsImV4cCI6MjAyMzMzMDcxMn0.Tov11N_g-ERTctEqGBbYOr8FgVmDLWfB_-m1MbWcnEw";

const options = {
  headers: {
    apikey: key,
  },
};

fetch(url, options)
  .then((res) => res.json())
  .then(vis);

function vis(data) {
  console.log(data);
}
