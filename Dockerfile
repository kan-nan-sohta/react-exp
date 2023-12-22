# Node.jsのバージョンを16.xに変更
ARG BASE_IMAGE=node:16-bullseye-slim
FROM ${BASE_IMAGE}

ARG PROJECT_NAME=react-training
ARG APPLICATION_DIRECTORY=/home/node/${PROJECT_NAME}
ENV DEBIAN_FRONTEND="noninteractive" \
    LC_ALL="C.UTF-8" \
    LANG="C.UTF-8"

RUN apt update \
    && apt install --no-install-recommends -y git curl make

WORKDIR ${APPLICATION_DIRECTORY}
