#!/bin/bash
# Script de déploiement automatique sur Vercel

echo "🚀 Déploiement JDLP Voyages sur Vercel"
echo "======================================"

# 1. Installer Vercel CLI
npm install -g vercel

# 2. Se connecter à Vercel
vercel login

# 3. Déployer
vercel --prod

echo "✅ Site déployé sur Vercel !"
echo "🌐 URL: https://jdlp-voyages.vercel.app"
