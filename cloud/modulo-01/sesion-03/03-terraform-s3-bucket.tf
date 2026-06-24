terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.0"
    }
  }
}

provider "aws" {
  region = "us-east-1"
}

variable "bucket_name" {
  type        = string
  description = "Nombre único global para el bucket"
}

resource "aws_s3_bucket" "demo" {
  bucket = var.bucket_name

  tags = {
    Proyecto = "curso-cloud"
    Ambiente = "laboratorio"
  }
}

output "bucket_name" {
  value = aws_s3_bucket.demo.bucket
}
