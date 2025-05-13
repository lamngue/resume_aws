# resume_aws

- My attempt so far for the [Cloud resume challenge in AWS](https://cloudresumechallenge.dev/docs/the-challenge/aws/)

## ✅ Overview

A personal resume website deployed on AWS using modern cloud architecture, including:

- Static website hosting with S3
- HTTPS with a custom domain using Route 53 and ACM
- Global distribution via CloudFront

## 🔧 Tech Stack

- HTML & CSS
- AWS S3
- AWS Route 53
- AWS Certificate Manager (ACM)
- AWS CloudFront

## 🛠️ Steps Taken

### 1. HTML & CSS Resume
- Created a simple resume using HTML and CSS.
- Tested locally to ensure design and responsiveness.

### 2. S3 Bucket Setup
- Created an S3 bucket named `yourdomain.com`.
- Enabled static website hosting.
- Uploaded `index.html` and `styles.css`.

### 3. CloudFront Distribution
- Created a CloudFront distribution pointing to the S3 bucket.
- Set default root object to `index.html`.
- Enabled HTTP/2 and selected the desired price class.

### 4. Custom Domain with Route 53
- Registered or configured a domain using Amazon Route 53.
- Created an alias `A` record pointing the domain to the CloudFront distribution.

### 5. SSL Certificate with ACM
- Requested a public certificate for `yourdomain.com` using AWS Certificate Manager.
- Verified domain ownership via DNS.
- **Important**: The certificate must be created in the **us-east-1** region for CloudFront.

### 6. Domain & HTTPS Configuration
- Associated the ACM certificate with the CloudFront distribution.
- Enabled HTTPS-only connections.

### 7. Add Viewer Count:
- Added a DynamoDB table to store the view counts.
- Configured Lambda and API Gateway to retrieve and modify the item.

## 🌍 Live Demo

🔗 https://resume.lamnguyen.website/
## 📸 Architecture Diagram

![ResumeCloudArchitecture](![ClourResumeArchitecture drawio](https://github.com/user-attachments/assets/bd448d0b-e5a5-4c5b-88de-047bee258d34)
)

## 🚀 Next Steps

- Deploy backend via CI/CD (GitHub Actions).
- Add tests or validation pipelines.
