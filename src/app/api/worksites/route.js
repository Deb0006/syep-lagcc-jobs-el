import { google } from "googleapis";

export async function GET(){
  const credentials = {
    type: process.env.TYPE,
    project_id: process.env.PROJECT_ID,
    private_key_id: process.env.PRIVATE_KEY_ID,
    private_key: process.env.PRIVATE_KEY.replace(/\\n/g, "\n"),
    client_email: process.env.CLIENT_EMAIL,
    client_id: process.env.CLIENT_ID,
    auth_uri: process.env.AUTH_URI,
    token_uri: process.env.TOKEN_URI,
    auth_provider_x509_cert_url: process.env.AUTH_PROVIDER,
    client_x509_cert_url: process.env.CLIENT_CERT,
    universe_domain: process.env.UNIVERSE_DOMAIN,
  };

  const auth = new google.auth.GoogleAuth({
    credentials: credentials,
    scopes: "https://www.googleapis.com/auth/spreadsheets",
  });

  const client = await auth.getClient();

  const googleSheets = google.sheets({ version: "v4", auth: client });

  const getRows1 = await googleSheets.spreadsheets.values.get({
    auth,
    spreadsheetId: process.env.SHEET_ID,
    range: "Sheet4",
  });
  const getRows2 = await googleSheets.spreadsheets.values.get({
    auth,
    spreadsheetId: process.env.SHEET_ID,
    range: "Sheet2",
  });
  const data1 = getRows1.data.values;
  const data2 = getRows2.data.values;
  const parsedData = {};

  // Loop through Sheet 4
  for (let i = 1; i < data1.length; i++) {
    let companyName = data1[i][0];
    let job = {
      WorksiteName: data1[i][0],
      JobTitle: data1[i][1],
      Duties: data1[i][2],
      Restrictions: data1[i][3],
      Requirements: data1[i][4],
      ParticipantsRequested: data1[i][5],
    };
    if (parsedData[companyName]) {
      parsedData[companyName].jobs.push(job);
    } else {
      parsedData[companyName] = { jobs: [job] }; //Initialize new company with first job
    }
  }
  //Loop through Sheet2
  for (let i = 1; i < data2.length; i++) {
    let companyName = data2[i][1];
    let worksiteData = {
      worksiteID: data2[i][0],
      Industry: data2[i][2],
      IndustryOther: data2[i][3],
      Street: data2[i][4],
      Floor: data2[i][5],
      City: data2[i][6],
      State: data2[i][7],
      ZipCode: data2[i][8],
      SiteImplementation: data2[i][24],
    };
    if (parsedData[companyName]) {
      parsedData[companyName] = { ...parsedData[companyName], ...worksiteData }; // Add company info to existing company data
    } else {
      parsedData[companyName] = { jobs: [], ...worksiteData }; // Initialize new company without jobs
    }
  }

  return Response.json({
    Worksites: parsedData,
  });
}
