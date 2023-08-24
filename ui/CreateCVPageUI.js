export const toast_errorMessage = "//div[contains(@class,'toast--error')]/div[@role='alert' and contains(@class,'toast-body')]"
export const toast_successMessage = "//div[contains(@class,'toast--success')]/div[@role='alert' and contains(@class,'toast-body')]"

export const btnOpenInBrowser = "//span[text()='Open in Browser']/parent::a"
export const btnPublish = "//button[@data-testid='btnPublishVirtual']/span"
export const btnSettings = "button[data-testid='btnSettings']"
export const btnPublishNow = "//button[text()='Publish Now!']"
export const txtJobTitle = "input[id='jobTitle']"
export const txtFirstName = "input[id='input-firstName']"
export const txtLastName = "input[id='input-lastname']"
export const txtEmail = "input[id='input-email']"
export const txtPhone = "input[id='input-phone']"
export const addInfo = "//button/span[text()='Additional Information']"
export const collapseInfo = "//button/span[text()='Collapse Information']"
export const btnContinue = "//button[@type='submit' and text()='Continue']"
export const loadingCV = "//p[text()='We’re preparing your CV info...']"

//More Info=================================================
export const txtCountry = "input[id='input-country']"
export const txtCity = "input[id='input-city']"
export const txtAddress = "input[id='input-address']"
export const txtZipcode = "input[id='input-zipCode']"
export const txtNationality = "input[id='input-nationality']"
export const txtDrivingLicense = "input[id='input-drivingLicense']"
export const txtPlaceOfBirth = "input[id='input-placeOfBirth']"
export const txtDateOfBirth = "input[id='input-dateOfBirth']"
export const txtLinkedIn = "input[id='input-linkedIn']"
export const txtWebsite = "input[id='input-website']"

//Upload Avatar=============================================
export const upload_imgUpload = "img[alt='upload']"
export const upload_uploadNew = "input[type='file']"
export const upload_saveChange = "//button/span[text()='Save Changes']"
//===========================================================



//CV details=================================================
export const cvDT_fullName = "//div[@class='personalInfo']/*[@class='title sectionItemTitle']/span"
export const cvDT_jobTitle = "//div[@class='personalInfo']/*[@class='subTitle']/span"
export const cvDT_email = "//div[@class='commonContact']/div[1]/p/span"
export const cvDT_phone = "//div[@class='commonContact']/div[2]/p/span"
export const cvDT_website = "//div[@class='commonContact']/div[3]/p/span"
export const cvDT_linkedIn = "//div[@class='commonContact']/div[4]/p/span"
export const cvDT_Address = "//div[@class='commonContact']/div[5]/p/span"
export const cvDT_placeOfBirth = "//div[@class='contact-expand']/div[1]/p/span[2]"
export const cvDT_dateOfBirth = "//div[@class='contact-expand']/div[2]/p/span[2]"
export const cvDT_profile = "//section[@data-testid='profile']//div"
export const cvDT_education = "//section[@data-testid='Education']//div"
export const cvDT_experience = "//section[@data-testid='Experience']//div"

//step 2======================================================
export const btnProfessionalSumary = "//p[text()='Professional Summary']/parent::div/parent::button/following-sibling::div/button[2]"
export const btnEducation = "//p[text()='Education']/parent::div/parent::button/following-sibling::div/button[2]"
export const btnExperience = "//p[text()='Experience']/parent::div/parent::button"
export const btnSkills = "//p[text()='Skills']/parent::div/parent::button"
export const btnCertifications = "//p[text()='Certifications']/parent::div/parent::button"
export const btnReference = "//p[text()='References']/parent::div/parent::button"

export const txtProfessionalSummary = "//p[text()='Professional Summary']/parent::div/parent::button/parent::div/following-sibling::div//div[@role='textbox']/div/div"
export const txtSchool = "input[name='school']"
export const txtDegree = "input[name='degree']"
export const txtStartDate = "//p[text()='Start & End Date']/parent::div/following-sibling::div/div[1]//input"
export const txtEndDate = "//p[text()='Start & End Date']/parent::div/following-sibling::div/div[2]//input"
export const txtEduCity = "input[name='city']"
export const txtEduDescript = "//p[text()='Education']/parent::div/parent::button/parent::div/following-sibling::div//div[@role='textbox']/div/div"
export const txtExpJobTitle = "//p[text()='Job Title']/following-sibling::div//input"
export const txtExpStartDate = "//p[text()='Start & End Date']/parent::div/following-sibling::div/div[1]//input"
export const txtExpEndDate = "//p[text()='Start & End Date']/parent::div/following-sibling::div/div[2]//input"
export const txtExpCompanyName = "//p[text()='Company name']/following-sibling::div/div[1]//input"
export const btnExpSendVerify = "//p[text()='Send verify']/parent::button"
export const btnExpSendConfirm = "//div[contains(@class, 'modal')]//button[@data-testid='btnConfirm']"

export const txtExpDescript = "//p[text()='Experience']/parent::div/parent::button/parent::div/following-sibling::div//div[@role='textbox']/div/div"
// export const txtSkills = ""

export const btnDownload = "//span[text()='Download']/parent::button"
export const btnDownloadPDF = "//span[text()='Download PDF file']/parent::button"