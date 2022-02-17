FROM python:3.9.0-slim-buster

ARG HOME
WORKDIR $HOME

RUN apt-get update && \
    apt-get install -y gcc gettext-base && \
    apt-get clean && \
    rm -rf /var/lib/apt/lists/*

COPY ./pyproject.toml ./poetry.lock* .

RUN pip install -U pip && pip install poetry 
RUN poetry config virtualenvs.create false
RUN poetry install

COPY ./ .

ARG SERVICE_NAME
ENV SERVICE_NAME ${SERVICE_NAME}

ENTRYPOINT ["./entrypoint.sh"]
