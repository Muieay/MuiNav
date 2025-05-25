import re
from bs4 import BeautifulSoup
import os
from ruamel.yaml import YAML
from ruamel.yaml.scalarstring import SingleQuotedScalarString as SQS
def clean_text(text):
    # 移除换行符和特殊字符，只保留常见符号、中文、英文和数字
    text = re.sub(r'[\r\n\t]+', ' ', text)
    text = re.sub(r'[^\w\s\u4e00-\u9fff\-.,:;!?()（）【】\[\]]+', '', text)
    return text.strip()

def parse_bookmarks(html_path):
    with open(html_path, 'r', encoding='utf-8') as f:
        soup = BeautifulSoup(f, 'html.parser')

    tab_list = []

    for a_tag in soup.find_all('a'):
        url = a_tag.get('href', '')
        icon = a_tag.get('icon', '')
        raw_text = a_tag.get_text().strip()

        title = desc = raw_text

        # 标题和描述分割
        if ' - ' in raw_text:
            parts = re.split(r' - (?!.*\])', raw_text, 1)
            if len(parts) > 1:
                title, desc = parts[0].strip(), parts[1].strip()

        # 提取括号内内容作为描述
        bracket_match = re.search(r'\(([^)]+)\)$', desc)
        if bracket_match:
            desc = bracket_match.group(1).strip()

        # 清洗文本
        title = clean_text(title)
        desc = clean_text(desc)

        if icon != '' and len(icon) > 10:
            tab_list.append({
                'img': icon,
                'title': title,
                'url': url,
                'desc': desc if bracket_match else clean_text(raw_text)
            })

    return tab_list

def save_to_yaml(tab_list, output_path):
    os.makedirs(os.path.dirname(output_path), exist_ok=True)

    data = {
        'nav': [
            {
                'navTab': SQS('收藏夹'),
                'tabList': [
                    {
                        'img': SQS(item['img']),
                        'title': SQS(item['title']),
                        'url': SQS(item['url']),
                        'desc': SQS(item['desc']),
                    }
                    for item in tab_list
                ]
            }
        ]
    }

    yaml = YAML()
    yaml.indent(mapping=2, sequence=4, offset=2)  # 关键缩进设置
    yaml.preserve_quotes = True  # 保留引号
    with open(output_path, 'w', encoding='utf-8') as f:
        yaml.dump(data, f)

if __name__ == "__main__":
    html_file = './favorites.html'
    output_file = './bookmarks.yml'

    parsed_data = parse_bookmarks(html_file)
    save_to_yaml(parsed_data, output_file)
    print(f"成功导出 {len(parsed_data)} 条书签到 {output_file}")
