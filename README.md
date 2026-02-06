# devops-cloud-migration
End-to-end DevOps-driven cloud migration project demonstrating migration of a legacy on-premise application to cloud using CI/CD, Docker, Terraform, and cloud services.
📁 Complete Folder & File Structure
devops-cloud-migration/
│
├── README.md
├── .gitignore
│
├── legacy-app/
│   ├── app.py / server.js
│   ├── requirements.txt / package.json
│   └── README.md
│
├── docker/
│   └── Dockerfile
│
├── ci-cd/
│   └── jenkinsfile / pipeline.yml
│
├── terraform/
│   ├── provider.tf
│   ├── main.tf
│   ├── variables.tf
│   └── outputs.tf
│
├── scripts/
│   ├── migrate.sh
│   └── deploy.sh
│
├── monitoring/
│   └── notes.md
│
└── docs/
    └── migration-architecture.png
    # DevOps for Cloud Migration

This project demonstrates how a legacy on-premise application can be migrated
to the cloud using DevOps practices and automation.

The migration focuses on containerization, CI/CD pipelines, and Infrastructure
as Code to ensure a smooth, scalable, and repeatable cloud transition.

## Migration Phases
- Assessment of legacy application
- Containerization using Docker
- CI/CD pipeline implementation
- Cloud infrastructure provisioning
- Application deployment on cloud

## Tech Stack
- Application: Node.js / Python
- Containerization: Docker
- CI/CD: Jenkins / GitHub Actions
- Cloud: AWS / GCP
- Infrastructure as Code: Terraform
- Monitoring: CloudWatch (basic)

## Architecture
On-Prem App → Docker Container → CI/CD Pipeline → Cloud Infrastructure → Production

## Project Structure
legacy-app/   - On-prem legacy application docker/       - Dockerfile for containerization ci-cd/        - CI/CD pipeline configuration terraform/    - Cloud infrastructure provisioning scripts/      - Migration & deployment scripts docs/         - Architecture diagrams
## Deployment Flow
1. Legacy application analysis
2. Docker image creation
3. CI/CD pipeline execution
4. Cloud infrastructure provisioning using Terraform
5. Application deployment on cloud

## Benefits of DevOps in Cloud Migration
- Faster migration
- Reduced manual errors
- Scalable and repeatable deployments
- Improved reliability

## Future Improvements
- Kubernetes-based migration
- Blue-Green deployment
- Monitoring with Prometheus & Grafana

## Author
Anjali Singh
