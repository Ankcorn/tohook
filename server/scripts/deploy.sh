aws ecr get-login --no-include-email --region eu-west-2 | /bin/bash
docker build -t todo ../
docker tag todo:latest 260235234243.dkr.ecr.eu-west-2.amazonaws.com/todo:latest
docker push 260235234243.dkr.ecr.eu-west-2.amazonaws.com/todo:latest